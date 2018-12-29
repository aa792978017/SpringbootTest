package com.agile.agiletest.controller;


import com.agile.agiletest.Result.Result;
import com.agile.agiletest.service.OrderService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     *get all order
     * @author 41688
     * @return
     * */
    @PostMapping("/getorder")
    public Result getOrder(@RequestBody JSONObject jsonObject){
        String username = jsonObject.getString("username");

        Result result = orderService.getOrder(username);
        return result;
    }

    /**
     * change order
     * @author 41688
     * @return
     * */
    @PostMapping("/changeorder")
    public Result changeOrder(@RequestBody JSONObject jsonObject){
        int orderid = jsonObject.getInteger("orderId");
        int tripsid = jsonObject.getInteger("tripsId");
        Result result = orderService.changeOrder(orderid,tripsid);
        return result;
    }
}
