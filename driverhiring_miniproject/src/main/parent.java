package main;

public class parent{
	protected  final DatabaseManager dbManager = new DatabaseManager();
	protected  void addExampleDrivers(String name, int exp, double rat, String vehicle) {
        Driver driver1 = new Driver(name, exp, rat, vehicle);
        getDbManager().addDriver(driver1);
    }
	public DatabaseManager getDbManager() {
		return dbManager;
	}
}
