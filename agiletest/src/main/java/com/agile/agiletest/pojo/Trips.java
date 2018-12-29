package com.agile.agiletest.pojo;

/**
 * 用于查询车票信息
 * @author 41688
 * @version 1.0
* */
public class Trips {
    private int id;
    private String orginLocation;
    private String destinationLocation;
//    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String startTime;
//    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String reachTime;
    private String carNum;
    private int ticketPrice;
    private int ticketNum;

    @Override
    public String toString() {
        return "Trips{" +
                "id=" + id +
                ", orginLocation='" + orginLocation + '\'' +
                ", destinationLocation='" + destinationLocation + '\'' +
                ", startTime='" + startTime + '\'' +
                ", reachTime='" + reachTime + '\'' +
                ", carNum='" + carNum + '\'' +
                ", ticketPrice=" + ticketPrice +
                ", ticketNum=" + ticketNum +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrginLocation() {
        return orginLocation;
    }

    public void setOrginLocation(String orginLocation) {
        this.orginLocation = orginLocation;
    }

    public String getDestinationLocation() {
        return destinationLocation;
    }

    public void setDestinationLocation(String destinationLocation) {
        this.destinationLocation = destinationLocation;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getReachTime() {
        return reachTime;
    }

    public void setReachTime(String reachTime) {
        this.reachTime = reachTime;
    }

    public String getCarNum() {
        return carNum;
    }

    public void setCarNum(String carNum) {
        this.carNum = carNum;
    }

    public int getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(int ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public int getTicketNum() {
        return ticketNum;
    }

    public void setTicketNum(int ticketNum) {
        this.ticketNum = ticketNum;
    }
}
