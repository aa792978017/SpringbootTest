package com.agile.agiletest.dao;

import com.agile.agiletest.pojo.Order;
import com.agile.agiletest.pojo.Person;
import org.apache.ibatis.annotations.*;

import java.util.List;


@Mapper
public interface OrderDao {
    /**
     *插入订单信息
     * @param order
     * @return
     */
    @Insert("INSERT INTO `order` (car_info_id, person_id, change_times, status) VALUES (#{carInfoId}, #{personId}, #{changeTimes}, #{status})\n" +
            "    ")
    @Options(useGeneratedKeys=true, keyProperty="id", keyColumn="id")
    public abstract void buyTicket(Order order);

    /**
     * 退票，把statu改为2
     * @param orderId
     * @return
     */
    @Update("update `order` set status = 1 where id = #{orderId}")
    public abstract int updateOrder(int orderId);


    @Select("select * from `order`,user where user.person_id = `order`.person_id and user.username = #{userName}")
    public List<Order> getOrder(String  userName);


    @Update("update `order` set status = 2 where person_id=#{personId} and car_info_id = (select id from trips where car_num = #{carNum}" +
            " and start_time = #{startTime} and reach_time = #{reachTime})")
    public abstract int updateOrder1(@Param("personId") int personId, @Param("carNum") String carNum,
                                     @Param("startTime") String startTime,@Param("reachTime") String reachTime);

//    @Select("select * from `order` where person_id = #{personId}")
//    public List<Order> getOrder(Order order);

    /**
     * 查询目标订单
     * @param orderId
     * @return
    * */
    @Select("select * from `order` where id = #{orderId}")
    public Order getAimOrder(int orderId);

    /**
     * 查询订单所有人信息
     */
    @Select("select * from `person` where `id` = #{personId}")
    public Person getPersoninf(int personId);

    /**
     * 改签订单信息变更
     * @return
     */
    @Update("update `order` set car_info_id = #{tripsId},change_times = change_times +1,status = 1 where id = #{orderId}")
    public int changeOrder(@Param("orderId")int orderId,@Param("tripsId")int tripsId);


}
