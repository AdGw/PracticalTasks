#include <iostream>
using namespace std;

int main(){
	double sales[10];
	double largestSale, sum, average;

	for(int i = 0; i < 10; i++){ // initalie array
		sales[i] = 0.0;
	}
	for(int i = 0; i < 10; i++){  // read data into array
		cin >> sales[i];
	}

	for(int i = 0; i < 10; i++){ // print array elements
		cout << sales[i] << "";
	}
	sum = 0;

	for(int i = 0; i< 10; i++){ // calc sum and average
		sum = sum + sales[i];
		average = sum/10;
	}
	cout << endl << "Sum = " << sum << endl;
	cout << endl << "Average = " << average << endl;
	// Algorithm to max index

	int maxIndex = 0;
	for(int i = 0;i < 10; i++){
		if(sales[maxIndex] < sales[i]){
			maxIndex = i;
			largestSale = sales[maxIndex];
			cout << "Largest sale = " << largestSale << endl;
		}
		return 0;
	}
}

