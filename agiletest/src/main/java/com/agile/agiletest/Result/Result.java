package com.agile.agiletest.Result;

/**
 * 数据传输类
 */
public class Result {
    private int stateCode;
    private Object data;
    private String msg;

    public Result(){

    }


    public int getStateCode() {
        return stateCode;
    }

    public void setStateCode(int stateCode) {
        this.stateCode = stateCode;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
