package ru.darlin.hack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.darlin.hack.dto.UserDTO;

@Controller
@RequestMapping("/login")
public class Login {

    @ResponseBody
    @PostMapping()
    public String login(@RequestBody UserDTO user) {
        return "okk";
    }
}
