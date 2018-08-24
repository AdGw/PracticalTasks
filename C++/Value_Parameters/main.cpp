#include <iostream>
using namespace std;

void funcValueParam(int num);

int main(){
	int number = 5;
	cout << "Before calling function the number is: " << number <<endl;
	funcValueParam(number);
	cout << "After calling function the number is: " << number << endl;
	return 0;
}

void funcValueParam(int num){
	cout << "Function Output: In this function before changing number: " << num << endl;
	num = 7;
	cout << "Function Output: In this function after changing number: " << num << endl;
}
