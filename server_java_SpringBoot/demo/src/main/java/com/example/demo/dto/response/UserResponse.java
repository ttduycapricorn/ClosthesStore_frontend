package com.example.demo.dto.response;

import jakarta.persistence.Column;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;

@Setter
@Getter
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    Long id;
    @Column(nullable = false)
    String name;
    String email;
    String phone;
    LocalDate Birthday;
    Set<String> roles;
}
