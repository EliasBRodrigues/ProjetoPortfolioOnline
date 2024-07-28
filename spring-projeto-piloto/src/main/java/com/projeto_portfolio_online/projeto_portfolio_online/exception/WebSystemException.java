package com.projeto_portfolio_online.projeto_portfolio_online.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class WebSystemException extends RuntimeException {
    private HttpStatus status;
    private String message;

    public WebSystemException(String message) {
        super(message);
    }

    public WebSystemException(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return this.status;
    }

    @Override
    public String getMessage() {
        return this.message;
    }
}
