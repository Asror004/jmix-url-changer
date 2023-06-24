package com.company.urlchange.service;

import java.util.HashMap;
import java.util.Map;

public class Helper {


    public static Map<String,String> getHeaders(String url) {


        Map<String, String> res = new HashMap<>();
        String[] split = url.substring(url.indexOf("?")+1).split("&");
        for (String s : split) {
            String[] innerSplit = s.split("=");
            String key = innerSplit[0];
            String value = "";
            if (innerSplit.length > 1)
                value = innerSplit[1];
            res.put(key,value);
        }
        return res;

    }

    public static String getHeader(String url, String key) {

        int i = url.indexOf(key);

        if (i < 0) {
            return "";
        } else {
            int backIndex = url.indexOf("&", i);
            if (backIndex < 0) {
                backIndex = url.length();
            }
            return url.substring(i + key.length() + 1, backIndex);
        }
    }

//    public static String setHeader(String url, String key, String value) {
//    }
}
