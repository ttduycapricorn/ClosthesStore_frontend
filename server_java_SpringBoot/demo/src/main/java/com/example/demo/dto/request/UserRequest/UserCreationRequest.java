package com.example.demo.dto.request.UserRequest;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserCreationRequest {
    String id;
    @Size(min = 2, max = 20)
    String name;
    @Size(min = 6, message = "INVALID_PASSWORD")
    String password;
    @Email(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$", message = "INVALID_USERNAME")
    String email;
    @Size(min = 10, max = 11)
    String phone;
}
