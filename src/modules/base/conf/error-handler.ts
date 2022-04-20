export class ErrorHandler {
    static invalidLogin = { error: true, status: 404, message: 'Invalid username or password.', code: 101 };
    static noRoleAssigned = { error: true, status: 404, message: 'No role has been assigned to you yet.', code: 102 };
    static noAccountExist = { error: true, status: 404, message: 'Account does not exist.', code: 103 };
    static invalidToken = { error: true, status: 400, message: 'Invalid token or token has been expired.', code: 104 };
    static notPermitted = { error: true, status: 403, message: 'You are not authorized for this action.', code: 105 };
    static recordNotFound = { error: true, status: 400, message: 'Record not found.', code: 106 };
    static missingRequiredHeader = { error: true, status: 400, message: 'A required HTTP header was not specified.', code: 107 };
    static missingRequiredQueryParameter = { error: true, status: 400, message: 'A required query parameter was not specified for this request.', code: 108 };
    static invalidEmail = { error: true, status: 400, message: 'The given email address is not valid.', code: 109 };
    static invalidPassword = { error: true, status: 400, message: 'The given password is not valid.', code: 110 };
    static passwordNotMatched = { error: true, status: 400, message: 'Invalid current password.', code: 111 };
    static authenticationFail = { error: true, status: 400, message: 'The given email or password is not valid.', code: 112 };
    static unAuthorized = { error: true, status: 401, message: 'You are not authorized to access this.', code: 113 };
    static forbidden = { error: true, status: 403, message: 'You are forbidden to access this.', code: 114 };
    static accountIsDisabled = { error: true, status: 403, message: 'The specified account is disabled.', code: 115 };
    static accountAlreadyExists = { error: true, status: 409, message: 'The specified account already exists.', code: 116 };
    static resourceAlreadyExists = { error: true, status: 409, message: 'The specified resource already exists.', code: 117 };
    static notFound = { error: true, status: 404, message: 'The specified resource does not exist.', code: 118 };
    static inActiveUser = { error: true, status: 403, message: 'The specified user is Inactive.', code: 119 };
    static campusAcademicCalendarSessionNotFound = { error: true, status: 403, message: 'Campus Academic Calendar Session Not Found.', code: 119 };
  
    static internalServerError = { error: true, status: 500, message: 'The server encountered an internal error. Please retry the request.', code: 120 };
  
    static invalidFileType = { error: true, status: 400, message: 'This file type is not valid.', code: 121 };
    static invalidFileSize = { error: true, status: 403, message: 'File size is invalid.', code: 122 };
    static duplicateEmail = { error: true, status: 403, message: "Provided email already exists in our system, Please try a different one.", code: 123 }
    static duplicateEntry = { error: true, status: 400, message: "Duplicate record Error.", code: 124 }
    static childrenExists = { error: true, status: 400, message: "This record has children.", code: 125, data: {} };
    static teacherRoleNotExists = { error: true, status: 404, message: "Teacher role does not exist. Create teacher role in security.", code: 126, data: {} };
  
    static End_Term_Evaluation_Not_Found = { error: true, status: 404, message: "End term evaluation not found.", code: 201, data: {} };
    static Grading_Policy_Not_Found = { error: true, status: 404, message: "Grading policy not found.", code: 202, data: {} };
    static Installment_Due_Dates_Missing = { error: true, status: 404, message: "Installment due date is missing.", code: 203, data: {} };
    static Act_Weight_Increased_Than_100 = { error: true, status: 404, message: "Weightage is increased than 100.", code: 204, data: {} };
  
    static Student_Session_Repeat = { error: true, status: 404, message: "Session is being repeated.", code: 205, data: {} };
  
    static STUDENT_ROLE_NOT_FOUND = { error: true, status: 404, message: "Unable to find 'Student' role..", code: 206, data: {} };
  
  
  
    static Courses_Not_Available_In_Course_Pack = { error: true, status: 404, message: "Courses not available in course pack.", code: 207, data: {} };
    static NO_ACTIVE_SESSION_FOUND = { error: true, status: 404, message: "Unable to find active session.", code: 208, data: {} };
  
    static SESSION_OR_YEAR_MISSING = { error: true, status: 404, message: "Session is not available.", code: 210, data: {} };
  
    static NO_ROLE_ASSIGNED = { error: true, status: 404, message: "No role has been assigned to this user.", code: 211, data: {} };
  
    static COURSE_CONTENT_NOT_FOUND = { error: true, status: 404, message: "Unable to find course content.", code: 212, data: {} };
  
    static ALREADY_MARKED = { error: true, status: 404, message: "Attendance already marked.", code: 213, data: {} };
  
    static ACTIVITY_RESULT_ALREADY_ENTERED = { error: true, status: 404, message: "Result already added.", code: 214, data: {} };
  
    static DUPLICATE_SESSION = { error: true, status: 404, message: "Duplicate Session.", code: 215, data: {} };
  
    static PORTAL_BLOCKED = { error: true, status: 400, message: 'Due to Non-Payment, portal has been blocked by Head Office.', code: 302 };
    static PORTAL_BLOCKED_AND_LOGOUT = { error: true, status: 400, message: 'Due to Non-Payment, portal has been blocked by Head Office.', code: 3002 };
  
    static KEY_DUPLICATION = { error: true, status: 400, message: 'Key is duplicated.', code: 213 };
  
    static CNIC_ADMISSION_ALREADYEXIST = { error: true, status: 400, message: "CNIC already exists.", code: 220, data: {} };
    static EMAIL_ADMISSION_ALREADYEXIST = { error: true, status: 400, message: "Email already exists.", code: 219, data: {} };
    static registration_link_expire = { error: true, status: 400, message: "Registration Link Expired.", code: 221, data: {} };
    static invalid_registration_link = { error: true, status: 400, message: "Invalid Registration Link.", code: 222, data: {} };
    static ORDER_QTY_LESS = { error: true, status: 400, message: "Total Receive Quantity is greater then Total Ordered Quantity.", code: 222, data: {} };
    static NO_PRODUCT_FOUND = { error: true, status: 400, message: "No purchase order found of this specification.", code: 222, data: {} };
  
  
  
    static send(err, res, next) {
      return res.status(err['status']).send(err);
    }
  
    static sendServerError(req, err, res, next) {
  
      console.log('Server Error: ' + err);
  
      if (ErrorHandler[err]) {
  
        let error = ErrorHandler[err];
        // serverError['serverErrorMessage'] = err;
        return res.status(error.status).send(error);
  
      }
      else {
        let serverError = ErrorHandler.internalServerError;
        serverError['serverErrorMessage'] = err;
  
      }
  
  
    }
  
    static sendAuthorizationError(err, res, next) {
      return res.status(err.status).send(err);
    }
    static sendFileSizeError(err, res, next) {
      return res.status(ErrorHandler.invalidFileSize.status).send(ErrorHandler.invalidFileSize);
    }
    static sendFileTypeError(err, res, next) {
      return res.status(ErrorHandler.invalidFileType.status).send(ErrorHandler.invalidFileType);
    }
  }
  