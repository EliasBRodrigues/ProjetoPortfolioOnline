package com.projeto_portfolio_online.projeto_portfolio_online.mapper.impl;

import org.springframework.stereotype.Service;

import com.projeto_portfolio_online.projeto_portfolio_online.mapper.UserMapper;
import com.projeto_portfolio_online.projeto_portfolio_online.models.User;
import com.projeto_portfolio_online.projeto_portfolio_online.models.dto.UserDTO;

@Service
public class UserMapperImpl implements UserMapper{

    @Override
    public UserDTO userDTO(User user) {
        if (user == null) {
            return null;
        }
        return new UserDTO(user.getId(), user.getUsername(),  user.getEmail(), user.getCpf(), user.getRole());
    }
}