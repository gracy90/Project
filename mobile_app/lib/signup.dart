import 'package:flutter/material.dart';

class SignUpScreen extends StatefulWidget {
  @override
  _SignUpScreenState createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  String username = '';
  String email = '';
  String password = '';

  void handleChange(String field, String value) {
    setState(() {
      if (field == 'username') {
        username = value;
      } else if (field == 'email') {
        email = value;
      } else if (field == 'password') {
        password = value;
      }
    });
  }

  void handleSubmit() async {
    print('Username: $username, Password: $password');
// TODO: Implement your sign-up logic here
// Example: Make API calls to register the user
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Create an account'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Username:'),
            TextField(
              onChanged: (value) => handleChange('username', value),
            ),
            SizedBox(height: 16.0),
            Text('Email:'),
            TextField(
              onChanged: (value) => handleChange('email', value),
            ),
            SizedBox(height: 16.0),
            Text('Password:'),
            TextField(
              obscureText: true,
              onChanged: (value) => handleChange('password', value),
            ),
            SizedBox(height: 24.0),
            ElevatedButton(
              onPressed: handleSubmit,
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }
}
