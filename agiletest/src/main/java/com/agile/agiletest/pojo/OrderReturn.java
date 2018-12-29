package com.agile.agiletest.pojo;

public class OrderReturn {
    private String orginLocation;
    private String destinationLocation;
    //    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String startTime;
    //    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
    private String reachTime;
    private String carNum;
    private int ticketPrice;
    private int ticketNum;
    private String trueName;
    private String idCardNum;
    private String phoneNum;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "OrderReturn{" +
                "orginLocation='" + orginLocation + '\'' +
                ", destinationLocation='" + destinationLocation + '\'' +
                ", startTime='" + startTime + '\'' +
                ", reachTime='" + reachTime + '\'' +
                ", carNum='" + carNum + '\'' +
                ", ticketPrice=" + ticketPrice +
                ", ticketNum=" + ticketNum +
                ", trueName='" + trueName + '\'' +
                ", idCardNum='" + idCardNum + '\'' +
                ", phoneNum='" + phoneNum + '\'' +
                '}';
    }

    public OrderReturn() {
    }

    public OrderReturn(String orginLocation, String destinationLocation, String startTime, String reachTime, String carNum, int ticketPrice, int ticketNum, String trueName, String idCardNum, String phoneNum) {
        this.orginLocation = orginLocation;
        this.destinationLocation = destinationLocation;
        this.startTime = startTime;
        this.reachTime = reachTime;
        this.carNum = carNum;
        this.ticketPrice = ticketPrice;
        this.ticketNum = ticketNum;
        this.trueName = trueName;
        this.idCardNum = idCardNum;
        this.phoneNum = phoneNum;
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

    public String getTrueName() {
        return trueName;
    }

    public void setTrueName(String trueName) {
        this.trueName = trueName;
    }

    public String getIdCardNum() {
        return idCardNum;
    }

    public void setIdCardNum(String idCardNum) {
        this.idCardNum = idCardNum;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }
}
