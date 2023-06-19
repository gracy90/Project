import 'package:flutter/material.dart';
import 'login.dart';
import 'signup.dart';
import 'welcome.dart';
import 'home.dart';
import 'about.dart'; // Add this line to import the AboutScreen class
import 'view_report.dart'; // Add this line to import the ViewReportScreen class

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      initialRoute: '/',
      routes: {
        '/': (context) => WelcomeScreen(),
        '/welcome': (context) => WelcomeScreen(),
        '/signup': (context) => SignUpScreen(),
        '/login': (context) => LoginScreen(),
        '/home': (context) => HomeScreen(),
        '/about': (context) => AboutScreen(),
        '/viewReport': (context) => ViewReportScreen(),
      },
    );
  }
}
