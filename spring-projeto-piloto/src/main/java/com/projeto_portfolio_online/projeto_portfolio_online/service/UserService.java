package com.projeto_portfolio_online.projeto_portfolio_online.service;

import java.util.List;
import java.util.Optional;

import com.projeto_portfolio_online.projeto_portfolio_online.models.User;

public interface UserService {
    List<User> getAllUsers();
    Optional<User> getUserByUsername(String username);
    Boolean hasUserWithUsername(String username);
    Boolean hasUserWithEmail(String email);
    User validateAndGetUserByUsername(String username);
    User saveUser(User user);
}
