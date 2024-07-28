package com.projeto_portfolio_online.projeto_portfolio_online.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;

import static com.projeto_portfolio_online.projeto_portfolio_online.initial.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto_portfolio_online.projeto_portfolio_online.mapper.UserMapper;
import com.projeto_portfolio_online.projeto_portfolio_online.models.dto.UserDTO;
import com.projeto_portfolio_online.projeto_portfolio_online.service.UserService;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {
  
    private final UserService userService;
    private final UserMapper userMapper;

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/{username}")
    public UserDTO getUser(@PathVariable String username) {
        return userMapper.userDTO(userService.validateAndGetUserByUsername(username));
    }
}
