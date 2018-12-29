package com.agile.agiletest.service.impl;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.dao.OrderDao;
import com.agile.agiletest.dao.TripsDao;
import com.agile.agiletest.pojo.Order;
import com.agile.agiletest.pojo.OrderReturn;
import com.agile.agiletest.pojo.Person;
import com.agile.agiletest.pojo.Trips;
import com.agile.agiletest.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private TripsDao tripsDao;

    @Override
    public Result getOrder(String username) {
        Result result = new Result();
        Person person = new Person();
        List<OrderReturn> orderReturnList  = new ArrayList<OrderReturn>();
        Trips trips = new Trips();

        //获取订单列表
        List<Order> orderdata= orderDao.getOrder(username);

        if(orderdata!=null){

            for(Order i:orderdata){
                OrderReturn orderReturn = new OrderReturn();
                person = orderDao.getPersoninf(i.getPersonId());
                trips = tripsDao.gettrips(i.getCarInfoId());
                orderReturn.setTrueName(person.getTrueName());
                orderReturn.setIdCardNum(person.getIdCardNum());
                orderReturn.setPhoneNum(person.getPhoneNum());
                orderReturn.setCarNum(trips.getCarNum());
                orderReturn.setDestinationLocation(trips.getDestinationLocation());
                orderReturn.setOrginLocation(trips.getOrginLocation());
                orderReturn.setTicketPrice(trips.getTicketPrice());
                orderReturn.setTicketNum(trips.getTicketNum());
                orderReturn.setStartTime(trips.getStartTime());
                orderReturn.setReachTime(trips.getReachTime());
                if (i.getStatus() == 1){
                    orderReturn.setStatus("已支付");
                }else {
                    orderReturn.setStatus("已退票");
                }
//                orderReturn.setStartTime(orderReturn.getStartTime());
//                orderReturn.setStartTime(trips.getStartTime());
                orderReturnList.add(orderReturn);

            }
            result.setStateCode(200);
            result.setMsg("Query succeed");
            result.setData(orderReturnList);
        }
        else{
//            result.setStateCode();
            result.setStateCode(404);
            result.setData(false);
            result.setMsg("Query failed,no order");
        }
        return result;
    }

    @Override
    public Result changeOrder(int orderId, int tripsId) {
        Result result = null;
        Order order = orderDao.getAimOrder(orderId);
        Trips trips =  tripsDao.gettrips(tripsId);
        if(trips.getTicketNum()>0){
            tripsDao.changeOldtrips(order.getCarInfoId());
            tripsDao.changeNewtrips(tripsId);
            orderDao.changeOrder(orderId,tripsId);
            result.setStateCode(200);
            result.setMsg("change order succeed");
        }
        else{
            result.setStateCode(404);
            result.setMsg("change order failed");
        }
        return result;
    }
}
