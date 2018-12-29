package com.agile.agiletest.dao;

import com.agile.agiletest.pojo.Trips;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface TripsDao {
    /**
     *查询目标车票信息
     * @param trips
     * @return
     * */
    @Select("select * from trips where start_time like CONCAT('%',#{startTime},'%') and car_num = #{carNum}")
    public abstract Trips getAimtrips(Trips trips);

    /**
     * 查询全部车票信息
     * @param trips
     * @return
     * */
    @Select("select * from trips where orgin_location=#{orginLocation} and destination_location=#{destinationLocation} and start_time like CONCAT('%',#{startTime},'%')")
    public abstract List<Trips> getAlltrips(Trips trips);

    /***
     * @param id
     * @return
     */
    @Select("select * from trips where id = #{id}")
    public abstract Trips gettrips(int id);

    /**
     *订单改签后改变旧车票信息
     * @param oldId
     * @return
    * */
    @Update("update trips set ticket_num = ticket_num+1 where id = #{oldId}")
    public int changeOldtrips(int oldId);

    /**
     *订单改签后改变新车票信息
     * @param newId
     * @return
     * */
    @Update("update trips set ticket_num = ticket_num-1 where id = #{newId}")
    public int changeNewtrips(int newId);

    /**
     * 通过id和车号查询车次信息
     * @param trips
     * @return
     */
    @Select("select * from trips where id = #{id} and car_num = #{carNum}")
    public abstract Trips getTripsInfoByCarInfoIdAndId (Trips trips);

    /**
     * 更新trips表
     * @param trips
     * @return
     */
    @Update(" <script> update trips set <if test='ticketNum != 0'> ticket_num = #{ticketNum}</if>" +
            "where id = #{id} </script>")
    public abstract int updateTrips(Trips trips);

    @Update("update trips set ticket_num = ticket_num + 1" +
            " where  car_num = #{carNum}" +
            "and start_time = #{startTime} and reach_time = #{reachTime}")
    public abstract int refundTrips(@Param("personId") int personId, @Param("carNum") String carNum,
                                    @Param("startTime") String startTime, @Param("reachTime") String reachTime);

    @Select("select * from trips where car_num = #{carNum} and start_time = #{startTime}")
    public abstract Trips getTripsInfoByCarNumAndStartTime(@Param("carNum") String carNum, @Param("startTime") String startTime);
}
