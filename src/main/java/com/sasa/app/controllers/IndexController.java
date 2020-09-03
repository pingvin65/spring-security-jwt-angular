package com.sasa.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@RequestMapping(value = {"/", "/brands", "/login", "/about", "/home", "/models"})
    public String index() {
        return "index";
    }
}
