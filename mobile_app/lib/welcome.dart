import 'package:flutter/material.dart';
import 'login.dart'; // Import the LoginScreen

class WelcomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Color(0xFF132F56),
      padding: EdgeInsets.all(20.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Welcome To The Smart Environmental Monitoring System',
            style: TextStyle(
              color: Colors.white,
              fontSize: 40.0,
              fontWeight: FontWeight.bold,
              decoration: TextDecoration.none, // Remove text underline
            ),
          ),
          SizedBox(height: 10.0),
          Text(
            'Monitor illegal mining activities in Atewa Forest',
            style: TextStyle(
              color: Colors.white,
              fontSize: 16.0,
              fontWeight: FontWeight.normal,
              decoration: TextDecoration.none, // Remove text underline
            ),
          ),
          SizedBox(height: 10.0),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => LoginScreen(),
                ),
              );
            },
            child: Text('Login'),
            style: ElevatedButton.styleFrom(
              primary: Colors.white,
              onPrimary: Color(0xFF132F56),
              padding: EdgeInsets.symmetric(
                vertical: 10.0,
                horizontal: 20.0,
              ),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5.0),
              ),
            ),
          ),
          SizedBox(height: 20.0),
          Image.asset(
            'assets/images/iot.jpg',
            width: 200.0,
            height: 200.0,
          ),
        ],
      ),
    );
  }
}
