package com.agile.agiletest.service.impl;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.dao.OrderDao;
import com.agile.agiletest.dao.PersonDao;
import com.agile.agiletest.dao.TripsDao;
import com.agile.agiletest.dao.UserDao;
import com.agile.agiletest.pojo.Order;
import com.agile.agiletest.pojo.Person;
import com.agile.agiletest.pojo.Trips;
import com.agile.agiletest.pojo.User;
import com.agile.agiletest.service.TripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TripsServiceImpl implements TripsService {
    @Autowired
    private OrderDao  orderDao;

    @Autowired
    private UserDao userDao;
    @Autowired
    private PersonDao personDao;

    @Autowired
    private TripsDao tripsDao;
    @Override
    public Result getAlltrips(Trips trips) {
        Result result = new Result();
        List<Trips> tripsdata = tripsDao.getAlltrips(trips);
        if(tripsdata != null){
            result.setMsg("Query all succeed");
            result.setData(tripsdata);
            result.setStateCode(200);
        }
        else{
            result.setMsg("Query failes,no tickets");
            result.setStateCode(404);
        }
        return result;
    }

    @Override
    public Result getAimtrips(Trips trips) {
        Result result = new Result();
        Trips tripsdata = tripsDao.getAimtrips(trips);
        if(tripsdata != null){
            result.setMsg("Query all succeed");
            result.setData(trips);
            result.setStateCode(200);
        }
        else{
            result.setMsg("Query failes,no tickets");
            result.setStateCode(404);
        }
        return result;
    }

    @Override
    @Transactional
    public Result buyTicket(String username, int carInfoId, String carNum) {
        Result result = new Result();

        //获取用户个人信息的id
        User customer = userDao.getUserByUsername(username);
        Person person = personDao.getPersonInfo(customer.getPersonId());
        if (person == null){
            result.setStateCode(400);
            result.setMsg("购票前请完善用户个人信息");
            result.setData(false);
            return result;
        }
        Trips trips = new Trips();
        trips.setCarNum(carNum);
        trips.setId(carInfoId);
        //获取车票详细信息
        Trips tripsInfoData = tripsDao.getTripsInfoByCarInfoIdAndId(trips);
        //判断车票是否卖光了
        Order order = new Order(carInfoId, customer.getPersonId(),0);
        order.setStatus(0);
        if (tripsInfoData.getTicketNum() >= 1){

             orderDao.buyTicket(order);
             trips.setTicketNum(tripsInfoData.getTicketNum() - 1);
             trips.setCarNum(null);
              int i = tripsDao.updateTrips(trips);
            Map<String, Object> detailData = new HashMap<>();
            if (order.getId() > 0 && i == 1){
                //还有车票，购买成功
                  result.setMsg("购票成功");
                  result.setStateCode(200);
                  detailData.put("personInfo",person);
                  detailData.put("customer", customer);
                  detailData.put("changeTimes",3 - order.getChangeTimes());
                  detailData.put("order", order);
                  result.setData(detailData);
            }
            return result;
        }
        else {
            //车票卖光了，购买失败
            result.setMsg(" 购买失败，车票已经卖光");
            result.setStateCode(400);
            result.setData(false);
            return result;
        }
    }

    @Override
    @Transactional
    public Result ticketRetund(int personId , String carNum, String startTime, String reachTime){
        Result result = new Result();
        //票数+1
        int i = tripsDao.refundTrips(personId, carNum, startTime, reachTime);
        //把订单状态改为退票
        int j = orderDao.updateOrder1(personId, carNum, startTime, reachTime);
        if (i > 0 && j > 0){
            result.setData(true);
            result.setMsg("退票成功");
            result.setStateCode(200);
        }else {
            result.setData(false);
            result.setMsg("退票失败");
            result.setStateCode(400);
        }
        return result;
    }

    @Override
    @Transactional
    public Result payMoney(int orderId) {
        Result result = new Result();
        if(orderDao.updateOrder(orderId) == 1){
            result.setStateCode(200);
            result.setMsg("支付成功");
            result.setData(true);
        }else {
            result.setData(false);
            result.setMsg("支付失败，请重新支付");
            result.setStateCode(400);
        }
        return result;
    }


}
