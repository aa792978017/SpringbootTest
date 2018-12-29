package com.agile.agiletest.service;
import com.agile.agiletest.Result.Result;
import com.agile.agiletest.pojo.Trips;



/**
 * 查询车票信息
 * @author 41688
 * @version 1.0
 */
public interface TripsService {
    /**
     * 查询所有车票信息
     * @param trips
     * @return
     * */
    public abstract Result getAlltrips(Trips trips);
    /**
     *查询目标车票信息
     * @param trips
     * @return
     * */
    public abstract Result getAimtrips(Trips trips);


    /**
     * 购买车票
     * @param username
     * @param carInfoId
     * @param carNum
     * @return
     */
    public abstract Result buyTicket(String username, int carInfoId, String carNum);

    /**
     * 退票
     * @param personId
     * @param carNum
     * @param reachTime
     * @param startTime
     * @return
     */
    public abstract Result ticketRetund(int personId ,String carNum, String startTime, String reachTime);

    /**
     * 付钱
     * @param orderId
     * @return
     */
    public abstract Result payMoney(int orderId);

}
