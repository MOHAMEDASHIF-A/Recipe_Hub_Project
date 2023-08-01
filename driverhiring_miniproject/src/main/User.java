package main;

import java.sql.*;
interface driverss{
	public void saveToDatabase();
}

class User implements driverss {
    private int id;
    private String name;
    private String email;
    private String mobile;
    int num;
    String str1;
    private int ans=details(num);
    private String str=details(str1);
    

    public User(String name, String email, String mobile) {
		super();
		this.name = name;
		this.email = email;
		this.mobile = mobile;
	}



	



	private String details(String str12) {
		// TODO Auto-generated method stub
		return str12;
	}







	private int details(int num2) {
		// TODO Auto-generated method stub
		return num2;
	}







	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMobile() {
		return mobile;
	}



	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
   


	public void saveToDatabase() {
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/driverhire", "root", "Ashif@2003");
             PreparedStatement statement = connection.prepareStatement("INSERT INTO users (name,email,mobilenumber) VALUES (?,?,?)", Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, this.name);
            statement.setString(2, this.email);
            statement.setString(3, this.mobile);
            statement.executeUpdate();
            ResultSet generatedKeys = statement.getGeneratedKeys();
            if (generatedKeys.next()) {
                this.id = generatedKeys.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

