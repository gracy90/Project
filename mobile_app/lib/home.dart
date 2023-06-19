import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  void handleLogout(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Confirmation'),
          content: Text('Are you sure you want to log out?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context); // Close the dialog
              },
              child: Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                // Perform logout logic here

                // Navigate to the LoginScreen using named route
                Navigator.pushNamedAndRemoveUntil(
                  context,
                  '/login', // Replace with your login route
                  (route) => false,
                );
              },
              child: Text('Log Out'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      drawer: Drawer(
        child: Container(
          width: MediaQuery.of(context).size.width * 0.7,
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              Container(
                height: 80,
                child: DrawerHeader(
                  decoration: BoxDecoration(
                    color: Colors.blue,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      IconButton(
                        icon: Icon(
                          Icons.arrow_back_ios,
                          color: Colors.white,
                        ),
                        onPressed: () {
                          // Handle back button tap
                          Navigator.pop(context);
                        },
                      ),
                    ],
                  ),
                ),
              ),
              ListTile(
                title: Text('About'),
                onTap: () {
                  // Handle About button tap
                  Navigator.pushNamed(context, '/about');
                },
              ),
              ListTile(
                title: Text('View Report'),
                onTap: () {
                  // Handle View Report button tap
                  Navigator.pushNamed(context, '/viewReport');
                },
              ),
              ListTile(
                title: Text('Log Out'),
                onTap: () {
                  // Handle Log Out button tap
                  handleLogout(context);
                },
              ),
              // Add more ListTiles for additional items in the sidebar
            ],
          ),
        ),
      ),
      body: Container(
        color: Color(0xFF132F56),
        padding: EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Welcome To The Smart',
              style: TextStyle(
                color: Colors.white,
                fontSize: 40.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              'Environmental',
              style: TextStyle(
                color: Colors.white,
                fontSize: 40.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              'Monitoring System',
              style: TextStyle(
                color: Colors.white,
                fontSize: 40.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10.0),
            Text(
              'Monitor illegal mining activities in Atewa Forest',
              style: TextStyle(
                color: Colors.white,
                fontSize: 16.0,
                fontWeight: FontWeight.normal,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
