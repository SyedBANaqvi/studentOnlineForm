"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler {
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
exports.ErrorHandler = ErrorHandler;
ErrorHandler.invalidLogin = { error: true, status: 404, message: 'Invalid username or password.', code: 101 };
ErrorHandler.noRoleAssigned = { error: true, status: 404, message: 'No role has been assigned to you yet.', code: 102 };
ErrorHandler.noAccountExist = { error: true, status: 404, message: 'Account does not exist.', code: 103 };
ErrorHandler.invalidToken = { error: true, status: 400, message: 'Invalid token or token has been expired.', code: 104 };
ErrorHandler.notPermitted = { error: true, status: 403, message: 'You are not authorized for this action.', code: 105 };
ErrorHandler.recordNotFound = { error: true, status: 400, message: 'Record not found.', code: 106 };
ErrorHandler.missingRequiredHeader = { error: true, status: 400, message: 'A required HTTP header was not specified.', code: 107 };
ErrorHandler.missingRequiredQueryParameter = { error: true, status: 400, message: 'A required query parameter was not specified for this request.', code: 108 };
ErrorHandler.invalidEmail = { error: true, status: 400, message: 'The given email address is not valid.', code: 109 };
ErrorHandler.invalidPassword = { error: true, status: 400, message: 'The given password is not valid.', code: 110 };
ErrorHandler.passwordNotMatched = { error: true, status: 400, message: 'Invalid current password.', code: 111 };
ErrorHandler.authenticationFail = { error: true, status: 400, message: 'The given email or password is not valid.', code: 112 };
ErrorHandler.unAuthorized = { error: true, status: 401, message: 'You are not authorized to access this.', code: 113 };
ErrorHandler.forbidden = { error: true, status: 403, message: 'You are forbidden to access this.', code: 114 };
ErrorHandler.accountIsDisabled = { error: true, status: 403, message: 'The specified account is disabled.', code: 115 };
ErrorHandler.accountAlreadyExists = { error: true, status: 409, message: 'The specified account already exists.', code: 116 };
ErrorHandler.resourceAlreadyExists = { error: true, status: 409, message: 'The specified resource already exists.', code: 117 };
ErrorHandler.notFound = { error: true, status: 404, message: 'The specified resource does not exist.', code: 118 };
ErrorHandler.inActiveUser = { error: true, status: 403, message: 'The specified user is Inactive.', code: 119 };
ErrorHandler.campusAcademicCalendarSessionNotFound = { error: true, status: 403, message: 'Campus Academic Calendar Session Not Found.', code: 119 };
ErrorHandler.internalServerError = { error: true, status: 500, message: 'The server encountered an internal error. Please retry the request.', code: 120 };
ErrorHandler.invalidFileType = { error: true, status: 400, message: 'This file type is not valid.', code: 121 };
ErrorHandler.invalidFileSize = { error: true, status: 403, message: 'File size is invalid.', code: 122 };
ErrorHandler.duplicateEmail = { error: true, status: 403, message: "Provided email already exists in our system, Please try a different one.", code: 123 };
ErrorHandler.duplicateEntry = { error: true, status: 400, message: "Duplicate record Error.", code: 124 };
ErrorHandler.childrenExists = { error: true, status: 400, message: "This record has children.", code: 125, data: {} };
ErrorHandler.teacherRoleNotExists = { error: true, status: 404, message: "Teacher role does not exist. Create teacher role in security.", code: 126, data: {} };
ErrorHandler.End_Term_Evaluation_Not_Found = { error: true, status: 404, message: "End term evaluation not found.", code: 201, data: {} };
ErrorHandler.Grading_Policy_Not_Found = { error: true, status: 404, message: "Grading policy not found.", code: 202, data: {} };
ErrorHandler.Installment_Due_Dates_Missing = { error: true, status: 404, message: "Installment due date is missing.", code: 203, data: {} };
ErrorHandler.Act_Weight_Increased_Than_100 = { error: true, status: 404, message: "Weightage is increased than 100.", code: 204, data: {} };
ErrorHandler.Student_Session_Repeat = { error: true, status: 404, message: "Session is being repeated.", code: 205, data: {} };
ErrorHandler.STUDENT_ROLE_NOT_FOUND = { error: true, status: 404, message: "Unable to find 'Student' role..", code: 206, data: {} };
ErrorHandler.Courses_Not_Available_In_Course_Pack = { error: true, status: 404, message: "Courses not available in course pack.", code: 207, data: {} };
ErrorHandler.NO_ACTIVE_SESSION_FOUND = { error: true, status: 404, message: "Unable to find active session.", code: 208, data: {} };
ErrorHandler.SESSION_OR_YEAR_MISSING = { error: true, status: 404, message: "Session is not available.", code: 210, data: {} };
ErrorHandler.NO_ROLE_ASSIGNED = { error: true, status: 404, message: "No role has been assigned to this user.", code: 211, data: {} };
ErrorHandler.COURSE_CONTENT_NOT_FOUND = { error: true, status: 404, message: "Unable to find course content.", code: 212, data: {} };
ErrorHandler.ALREADY_MARKED = { error: true, status: 404, message: "Attendance already marked.", code: 213, data: {} };
ErrorHandler.ACTIVITY_RESULT_ALREADY_ENTERED = { error: true, status: 404, message: "Result already added.", code: 214, data: {} };
ErrorHandler.DUPLICATE_SESSION = { error: true, status: 404, message: "Duplicate Session.", code: 215, data: {} };
ErrorHandler.PORTAL_BLOCKED = { error: true, status: 400, message: 'Due to Non-Payment, portal has been blocked by Head Office.', code: 302 };
ErrorHandler.PORTAL_BLOCKED_AND_LOGOUT = { error: true, status: 400, message: 'Due to Non-Payment, portal has been blocked by Head Office.', code: 3002 };
ErrorHandler.KEY_DUPLICATION = { error: true, status: 400, message: 'Key is duplicated.', code: 213 };
ErrorHandler.CNIC_ADMISSION_ALREADYEXIST = { error: true, status: 400, message: "CNIC already exists.", code: 220, data: {} };
ErrorHandler.EMAIL_ADMISSION_ALREADYEXIST = { error: true, status: 400, message: "Email already exists.", code: 219, data: {} };
ErrorHandler.registration_link_expire = { error: true, status: 400, message: "Registration Link Expired.", code: 221, data: {} };
ErrorHandler.invalid_registration_link = { error: true, status: 400, message: "Invalid Registration Link.", code: 222, data: {} };
ErrorHandler.ORDER_QTY_LESS = { error: true, status: 400, message: "Total Receive Quantity is greater then Total Ordered Quantity.", code: 222, data: {} };
ErrorHandler.NO_PRODUCT_FOUND = { error: true, status: 400, message: "No purchase order found of this specification.", code: 222, data: {} };
