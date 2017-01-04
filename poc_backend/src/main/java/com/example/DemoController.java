package com.example;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
	
	
    @RequestMapping("/greeting")
    public List<String> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return Arrays.asList(new String[] { "hello 1", "hello 2"  });
    }

}
