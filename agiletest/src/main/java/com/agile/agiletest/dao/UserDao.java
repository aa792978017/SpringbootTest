package com.agile.agiletest.dao;

import com.agile.agiletest.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

/**
 * User表持久类
 * @author wangchang
 * @version 0.1
 */
@Mapper
public interface UserDao {

    /**
     * 通过username查询User信息
     * @param username
     * @return
     */
    @Select("select * from user where username = #{username}")
    public abstract User getUserByUsername(String username);

    /**
     * 注册用户信息
     * @param user
     * @return
     */
    @Insert("insert into user (username, password, person_id) values(#{username}, #{password}, #{personId})")
    public abstract int insertUserRegisterInfo(User user);

    /**
     * 更新用户账户信息
     * @param user
     * @return
     */
    public abstract int updateUserRegisterInfo(User user);








}
