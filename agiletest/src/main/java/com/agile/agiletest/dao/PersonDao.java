package com.agile.agiletest.dao;

import com.agile.agiletest.pojo.Person;
import com.agile.agiletest.pojo.Trips;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PersonDao {


    /**
     * 查询全部车票信息
     * @param trips
     * @return
     * */
    @Select("select * from trips where orgin_location=#{orginLocation} and destination_location=#{destinationLocation} and start_time like CONCAT('%',#{startTime},'%')")
    public abstract List<Trips> getAlltrips(Trips trips);

    /**
     * 修改用户个人信息
     * @param person
     * @return
     */
    public abstract int updateUserInfo(Person person);

    /**
     * 通过id和车号查询车次信息
     * @param trips
     * @return
     */
    @Select("select * from trips where id = #{id} and car_num = #{carNum}")
    public abstract Trips getTripsInfoByCarInfoIdAndId (Trips trips);


    /**
     * 添加用户个人信息
     * @param person
     * @return
     */
    public abstract int insertUserInfo(Person person);
    /**
     * 通过id获取个人信息
     * @return
     */

    @Select("select * from person where id = #{Id}")
    public  Person getPersonInfo(@Param("Id")int Id);

    /**
     * 通过username查询个人信息
     * @param username
     * @return
     */
//    @Select("select * from person where (select person_id from user where username = #{username}")
    public abstract Person getPersonInfo1(String username);


}
