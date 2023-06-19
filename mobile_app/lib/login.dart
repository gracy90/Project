import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Login"),
      ),
      body: Center(
        child: Text(
          "Welcome to the Login Screen!",
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}