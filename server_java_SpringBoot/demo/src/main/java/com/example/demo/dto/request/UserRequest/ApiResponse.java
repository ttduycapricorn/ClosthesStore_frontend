package com.example.demo.dto.request.UserRequest;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL) //những result nào không cần messegase thì không cần gửi vào API
public class ApiResponse <T>{
    int code = 1000;
    String message;
    T result;
}