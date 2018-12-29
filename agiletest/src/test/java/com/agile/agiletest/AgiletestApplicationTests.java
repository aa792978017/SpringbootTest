package com.agile.agiletest;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.controller.OrderController;
import com.agile.agiletest.controller.TicketController;
import com.agile.agiletest.controller.UserController;
import com.agile.agiletest.dao.OrderDao;
import com.agile.agiletest.dao.PersonDao;
import com.agile.agiletest.dao.TripsDao;
import com.agile.agiletest.dao.UserDao;
import com.agile.agiletest.pojo.Person;
import com.agile.agiletest.pojo.Trips;
import com.agile.agiletest.pojo.User;
import com.agile.agiletest.service.impl.OrderServiceImpl;
import com.alibaba.fastjson.JSONObject;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JsonbTester;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AgiletestApplicationTests {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PersonDao personDao;

    @Autowired
    private TripsDao tripsDao;

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private OrderServiceImpl orderService;
    @Before
    public void beforeTest() {


    }

    @Test
    public void testSelectUserInfoByUsername() {
        String username = "username";
        User userList = userDao.getUserByUsername(username);
        System.out.println(userList.toString());
        Assert.assertEquals("username", userList.getUsername());
    }

    @Test
    public void testUpdateUserInfo() {
        User user = new User();
        user.setPassword("22222");
        user.setUsername("username");
        int i = userDao.updateUserRegisterInfo(user);
        Assert.assertEquals(1, i);
    }

    @After
    public void testDelete(){

    }
    @Test
    public void updateUserInfo(){
//        User user = userDao.getUserByUsername("username");
        User user = new User();
        user.setPassword("123456");
        user.setUsername("username1");

        int success = userDao.insertUserRegisterInfo(user);
        Assert.assertEquals(1, success);

        Person person = new Person("bot", "440811xxxxxxxx", "1443", 12);
        int id = personDao.insertUserInfo(person);
        System.out.println(id);
        System.out.println();
        System.out.println();
        System.out.println();

        user.setPersonId(person.getId());
        int i = userDao.updateUserRegisterInfo(user);
        Assert.assertEquals(1, i);
    }

    @Test
    public void testUpdateUserDe(){
        Person person = new Person("bot", "440811xxxxxxxx", "1443", 110);
        person.setId(13);
        int i = personDao.updateUserInfo(person);
        Assert.assertEquals(1,i);
    }

    @Test
    public void testGetAlltrips(){
        Trips trips = new Trips();
        List<Trips> result;
        trips.setOrginLocation("beijing");
        trips.setDestinationLocation("shijiazhuang");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date time = new Date();
        Date time = new Date();
        trips.setStartTime("2018");
        result = tripsDao.getAlltrips(trips);
        System.out.println(result.get(0).toString());
//        System.out.println(result.get(1).toString());
    }

    @Test
    public void testGetAimtrips(){
        Trips trips = new Trips();
        Trips result;
        trips.setOrginLocation("beijing");
        trips.setDestinationLocation("shijiazhuang");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        trips.setCarNum("k777");
//        Date time = new Date();
        Date time = new Date();
        trips.setStartTime("2018");
        result = tripsDao.getAimtrips(trips);
        System.out.println(result.toString());
    }

//    @Test
//    public void testgetorder(){
////        Order order = new Order(1,1,0);
//        List<Order> orderList = new ArrayList<>();
//        orderList = orderDao.getOrder(order);
//        System.out.println(orderList.get(0).toString());
//    }
    @Test
    public void testchangeOrder(){
        tripsDao.changeOldtrips(2);
        tripsDao.changeNewtrips(1);
        orderDao.changeOrder(1,1);
    }

    @Autowired
    private TicketController ticketController;

    @Test
    public void testPayMoney(){
        JSONObject data = new JSONObject();
//        int orderId = data.getInteger("orderId");
        data.put("orderId", 6);
        Result result = ticketController.payMoney(data);
    }


    @Test
    public void testgetorder(){
        JSONObject data = new JSONObject();
        data.put("userName","13");
//        System.out.println(data.get("userName"));
        OrderController orderController = new OrderController();
        orderController.getOrder(data);

//        System.out.println(orderController.getOrder(data).getData().getClass().toString());
    }

    @Autowired
    private UserController userController;
    @Test
    public void testGetPersonInfo() {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", "username");
        Result result = userController.getPersonInfo(jsonObject);
        System.out.println(result.getData().toString());

    }
//
//    @Autowired
//    private OrderDao orderDao;
    @Test
    public void testTicketRefund(){

       int i =   orderDao.updateOrder1(13, "Z238", "2018-12-19 12:05:05" , "2018-12-19 12:05:09");
        Assert.assertEquals(1,i);
    }

    @Test
    public void testTicketRefundController(){
        JSONObject jsonData = new JSONObject();
        jsonData.put("personId", 13);
        jsonData.put("carNum", "Z238");
        jsonData.put("startTime", "2018-12-19 12:05:05");
        jsonData.put("reachTime", "2018-12-19 12:05:09");
        Result result = ticketController.ticketRefund(jsonData);
    }


}

