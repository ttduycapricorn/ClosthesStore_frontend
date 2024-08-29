package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class User {
    @Id
    @GeneratedValue
    Long id;
    @Column(nullable = false)
    String name;
    String password;
    String email;
    String phone;
    LocalDate Birthday;

    @ManyToMany
    Set<Role> roles;
}
