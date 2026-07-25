import java.sql.*;

public class Test{
    public static void main(String[]arg) throws Exception {
        String url = "jdbc:mysql://localhost:3306/TestDB" ;
        String username = "root";
        String password = "Sahid@123";
        String query = "select * from student";

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url,username,password);
            if(conn != null){
                System.out.println("Connection is successfull");
            }
            Statement smt = conn.createStatement();
            ResultSet rs = smt.executeQuery(query);
            while(rs.next()){
                System.out.println("Connected : "+ rs.getString(2));
            }
            rs.close();
            smt.close();
            conn.close();
        } catch(Exception e){
            System.out.println("Connection is Failed");
            e.printStackTrace();
        }

    }
}