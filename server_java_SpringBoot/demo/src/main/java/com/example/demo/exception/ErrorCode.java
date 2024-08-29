package com.example.demo.exception;

public enum ErrorCode {
    UNCATEGORIED_EXCEPTION(9999, "Uncategorized Error"),
    USER_INVALID(1000, "user invalid!"),
    USER_NOT_FOUND(1002, "User Not Found"),
    INVALID_USERNAME(1003, "Username invalid!"),
    INVALID_PASSWORD(1004, "Invalid Password"),
    INVALID_EMAIL(1005, "Invalid Email"),
    USER_ALREADY_EXISTS(1006, "User Already Exists"),
    AUTHENTICATED_FALSE(1008, "Authenticated false!"),
    USER_NOT_EXISTS(1009, "user not exists!")
    ;

    private int code;
    private String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
