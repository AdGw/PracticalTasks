#include <iostream>
using namespace std;
const int ARRAY_SIZE = 4;
int search(const int list[], int listLength, int searchItem);

int main(){
	int intList[ARRAY_SIZE];
	int number;
	cout << "Enter " <<ARRAY_SIZE<< " integers: " << endl;
	for(int i; i < ARRAY_SIZE; i++){
		cin >> intList[i];
	}
	cout << endl;
	cout << "Enter the number to be searched for: ";
	cin >> number;
	cout <<endl;

	int pos = search(intList, ARRAY_SIZE, number);
	if(pos != -1){
		cout << number << " is found at index " << pos << endl;
	}else{
		cout << number << " is not in the list " << endl;
	}
	return 0;
}

int search(const int list[], int listLength, int searchItem){
	int loc;
	bool found = false;
	loc = 0;

	while(loc < listLength && !found){
		if(list[loc] == searchItem){
			found = true;
		}else{
			loc++;
		}
		if(found){
			return loc;
		}else{
			return -1;
		}
	}
}