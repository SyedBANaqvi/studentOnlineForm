
import { Promise } from 'bluebird';
import * as _ from 'lodash';
import * as Sequelize from "sequelize";
import { CONFIGURATIONS } from '../conf/configurations';
import { Connection } from '../conf/connection';

const { TableHints } = require('sequelize');


export class BaseModel {

  public req:any;
    public sequelize = Sequelize;
    public sequelizeModel:any;
    protected connection;

    constructor(req: any,model: any)
    {
        this.req = req;
        this.sequelizeModel = model;
        this.openConnection();
    }

    protected openConnection()
    {
        if(!CONFIGURATIONS.connection)
        {
            return new Connection().createConnection().then(res=>{
                console.log('-----------------------------------------------------------');
                console.log('Db Connection is created (' + new Date() + ')');
                console.log('-----------------------------------------------------------');
                this.connection = res;
                CONFIGURATIONS.connection = res;
            })
        }
        else{
            this.connection = CONFIGURATIONS.connection;
        }

       
    }

    protected closeConnection()
    {
        this.connection.close();
        CONFIGURATIONS.connection = null;
    }

  /**
  * Find single record by id
  * @param id
  */
  find(id, attributes?, include?, order?, xtra?) {
    return this.findByCondition(attributes, { id: id }, include, order, xtra);
  }

  findAndCountAll(attributes?, conditions?, include?, order?, options?, xtra?) {

    let args = BaseModel.qry2SequelizeOptions(options);

    return this.sequelizeModel.findAndCountAll(
      this.sequelizeQueryBuilder(attributes, conditions, include, order, args, xtra)
    );
  }

  /**
  * Find single record by specified condition
  * @param attributes
  */
  findByCondition(attributes, conditions, include?, order?, xtra?) {

    return this.sequelizeModel.findOne(
      this.sequelizeQueryBuilder(attributes, conditions, include, order, null, xtra)
    );
  }

  /**
  * Find all records with specified attributes
  * @param attributes
  */
  findAll(attributes?, conditions?, include?, order?, xtra?) {
    return this.findAllByConditions(attributes, conditions, include, order, xtra);
  }

  /**
  * Find all records with specified attributes and conditions
  * @param attributes
  */
  findAllByConditions(attributes, conditions, include?, order?, xtra?) {

    return this.sequelizeModel.findAll(
      this.sequelizeQueryBuilder(attributes, conditions, include, order, null, xtra)
    );
  }

  /**
  * Update a record for given id
  * @param item
  * @param id
  */
  update(id, item, xtra?) {
    return this.updateByCondition(item, { id: id }, xtra)
  }

  /**
  * Update a record for given id
  * @param item
  * @param id
  */
  updateByCondition(item, conditions, xtra?) {


    item = BaseModel.extendItem(this.req, item, false);

    return this.findByCondition(null, conditions, null, null, xtra).then(smObj => {

      return new Promise((resolve, reject) => {

        if (smObj) {

          return smObj.update(item, this.sequelizeQueryBuilder(null, conditions, null, null, null, xtra)).then(result => {

            let changedAttributes = {};

            Object.keys(result['_changed']).forEach(key => {

              if (key != 'updatedAt"') {
                changedAttributes[key] = result['dataValues'][key];
              }
            })

            // return this.createLog('U', changedAttributes, conditions, xtra).then(() => {
              resolve(result);
            // })

          })
        } else {
          resolve(true);
        }

      })


    });


  }


  updateAllByCondition(item, conditions, xtra?) {


    item = BaseModel.extendItem(this.req, item, false);

    return this.findAllByConditions(['id'], conditions, null, null, xtra).then(findResult => {

      return this.sequelizeModel.update(item, this.sequelizeQueryBuilder(null, conditions, null, null, null, xtra)).then(result => {

        let logData = {
          updatedCols: item,
          updatedRecords: _.map(findResult, 'id'),
        }
        // return this.createLog('UA', logData, conditions, xtra).then(() => {
        //   return result;
        // })

      })

    })



  }

  // private createLog(action, savedItem, condition, xtra?) {


  //   return new Promise((resolve) => {

  //     if (this.req && this.req.session.identity && (Object.keys(savedItem).length)) {

  //       let identity = this.req.session.identity

  //       let transactionObj = (xtra && xtra['transaction']) ? { transaction: xtra['transaction'] } : null;

  //       return ActivityLog.create({
  //         userId: identity.userId,
  //         username: identity.username,
  //         publicIp: identity.activityLog.publicIp,
  //         privateIp: identity.activityLog.privateIp,
  //         tableName: this.sequelizeModel.getTableName(),
  //         action: action,
  //         condition: condition ? JSON.stringify(condition) : null,
  //         savedItem: JSON.stringify(savedItem),
  //         logTransactionId: identity.activityLog.logTransactionId,
  //         api: identity.activityLog.api,
  //         sessionLogId: identity.activityLog.sessionLogId,
  //         userAgent: identity.activityLog.userAgent,
  //         additionalInfo: null,
  //         createdAt: new Date(),
  //       }, transactionObj).then(() => { resolve(true) });

  //     } else {
  //       resolve(true);
  //     }

  //   })


  // }

  /**
  * Create a new record
  * @param item
  */
  create(item, xtra?) {

    item = BaseModel.extendItem(this.req, item, true);
    return this.sequelizeModel.create(item, this.sequelizeQueryBuilder(null, null, null, null, null, xtra)).then(result => {

      // return this.createLog('C', result, result['id'], xtra).then(() => {
         return result;
      // })
    })

  }


  bulkCreate(items, xtra?) {

    _.each(items, item => {
      item['deleted'] = false;
      item = BaseModel.extendItem(this.req, item, true);
    })

    return this.sequelizeModel.bulkCreate(items, this.manageXtraOptions({}, xtra)).then(result => {

      if (xtra && xtra['createLog'] == false) {

        return result;

      } else {

        // return this.createLog('C', items, null, xtra).then(() => {
        //   return result;
        // })

      }

    })

  }

  /**
  * Count all records
  */
  // count() {
  //   return this.sequelizeModel.count();
  // }
  count(condition?, includes?, xtra?) {

    return this.sequelizeModel.count(
      this.sequelizeQueryBuilder(null, condition, includes, null, null, xtra)
    );

  }

  sum(column, condition?, includes?, xtra?) {

    return this.sequelizeModel.sum(column, this.sequelizeQueryBuilder(null, condition, includes, null, null, xtra));

  }

  /**
  * Delete a record against an id
  * @param id
  */
  delete(id, xtra?) {
    return this.deleteByConditions({ id: id }, xtra);
  }


  deleteAllByConditions(conditions, xtra?) {
    return this.findAllByConditions(['id'], conditions, null, null, xtra).then(res => {
      if (res && res.length) {
        return Promise.each(res, (el:any) => {
          return this.delete(el['id']);
        })
      }
    })
  }

  /**
  * Delete a record by conditions
  * @param conditions
  */
  deleteByConditions(conditions, xtra?) {

    return this.softDelete(conditions, xtra).then(result => {
      // return this.createLog('D', { deleted: true }, conditions, xtra).then(() => {
         return result;
      // })
    })

    // return this.sequelizeModel.destroy(
    //   this.sequelizeQueryBuilder(null, conditions)
    // );
  }

  /**
  * Update delted flat to true by condition
  * @param condition 
  */
  softDelete(condition, xtra?) {
    console.log(condition);
    
    let item = { deleted: true };
    item = BaseModel.extendItem(this.req, item, false);

    // return this.sequelizeModel.update(item, { where: condition });
    console.log(condition,"============")
    return this.sequelizeModel.update(item, this.sequelizeQueryBuilder(null, condition, null, null, null, xtra));
  }

  /**
  * To prepare the sequelize query.
  * attributes: ['a1', 'a2']
  * condition: {a: b, c: d}
  * includes : [{YOUR_INCLUDE}]
  * order: [['updatedAt', 'DESC']]
  *
  * @param attributes any
  * @param condition any
  */
  protected sequelizeQueryBuilder(attributes?, condition?, include?, order?, options?, xtra?) {

    let obj = {};

    obj['tableHint'] = TableHints.NOLOCK;

    if (attributes) {
      obj['attributes'] = attributes;
    }

    obj['where'] = this.conditionBuilder(condition);

    if (include) {
      obj['include'] = include;
    }

    if (order) {
      obj['order'] = order;
    }

    if (options && options['offset']) {
      obj['offset'] = options['offset'];
    }

    if (options && options['limit']) {
      obj['limit'] = options['limit'];
    }

    if (xtra) {
      obj = this.manageXtraOptions(obj, xtra);
    }


    return obj;
  }

  private manageXtraOptions(obj, xtra) {

    Object.keys(xtra).forEach(key => {
      obj[key] = xtra[key];
    })

    return obj;

  }


  /**
  * Build conditon object
  * 
  * @param condition 
  */
  public conditionBuilder(condition?) {
    return BaseModel.cb(condition);
  }

  /**
  * Build condition object. If condition is provided then append where clause 'deleted = false' into conditon or 
  * if conditon is not provided then create a conditon object with where clause 'deleted = false'.  
  * 
  * @param condition 
  */
  static cb(condition?) {

    let updatedCondition = (condition ? condition : {});
    if (!updatedCondition['noDeleted']) {
      updatedCondition['deleted'] = updatedCondition['deleted'] ? updatedCondition['deleted'] : false;
    } else {
      delete updatedCondition['noDeleted']
    }


    return updatedCondition;
  }

  /**
  * extend item with createdBy, updatedBy
  * 'both' parameter is being used to updated both keys created/updated by otherwise only updated by will udpated.
  * @param item object
  * @param both boolean
  */
  static extendItem(req, item, isCreate?) {

    if (req && req.session && req.session.identity) {

      if (isCreate) {
        item['createdBy'] = req.session.identity.userId;
      }

      item['updatedBy'] = req.session.identity.userId;

    }
    // console.log(item)
    return item;

  }

  /**
  * Convert query sting object to sequelize options object
  * 
  */
  static qry2SequelizeOptions(query) {

    let options = {};
    if (query) {

      if (query['offset']) {
        options['offset'] = Number(query['offset'])
      }

      if (query['limit']) {
        options['limit'] = Number(query['limit'])
      }

    }

    return options;
  }

  /**
  * To get records regarding assigned campus to user
  * 
  * @param id number
  */
  static getAssignedCampusCondition(req, condition?, columnName?) {

    let cond = condition ? condition : {};

    columnName = columnName ? columnName : 'campusId';

    let identity = req.session.identity

    if (identity.isSuperUser == false) {

      let campusIds = identity.campusIds;

      cond[columnName] = { [Sequelize.Op.in]: campusIds }

    }

    return cond

  }

  // static getAssignedCPDCondition(req, condition?, campusColumnName?, pdColumnName?) {

  //   let cond: any = condition ? condition : {};

  //   campusColumnName = campusColumnName ? campusColumnName : 'campusId';
  //   pdColumnName = pdColumnName ? pdColumnName : 'programDetailId';

  //   let identity = req.session.identity

  //   if (identity.isSuperUser == false) {


  //     let andCondition = []

  //     _.each(identity.cpdIds, item => {

  //       // { date: { $gte: campusAcademicCalendarRes['startDate'] } }

  //       let c = {}
  //       c[campusColumnName] = item['campusId'];
  //       c[pdColumnName] = item['programDetailId'];
  //       andCondition.push(c);


  //     })

  //     cond[Sequelize.Op.or] = andCondition;

  //   }

  //   return cond

  // }
}
