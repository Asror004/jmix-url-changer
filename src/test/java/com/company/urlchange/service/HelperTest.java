package com.company.urlchange.service;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;

import static org.junit.jupiter.api.Assertions.*;

class HelperTest {

    private static final Logger log = org.slf4j.LoggerFactory.getLogger(HelperTest.class);

    @Test
    void getHeaders() {
        String url = "http://localhost:8080/?id=1&age=66&gender=MALE";
        log.info(Helper.getHeaders(url).toString());
    }

    @Test
    void getHeaders1() {
        String url = "http://localhost:8080/?id=1&age=66&gender===MALE";
        log.info(Helper.getHeaders(url).toString());
    }
}