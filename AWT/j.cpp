#include <iostream>
using namespace std;

int main() {
    int n = 6; // Number of rows in the pattern

    // Loop to print the upper half of the pattern
    for (int i = 1; i <= n; i++) {
        
               for (int j = 1; j <= i; j++) {
            cout << j << " ";
           cout<<endl;
           for (int row = 0; row <=j; row++)
           {
           for (int col = 0; col <= n; col++)
           {
           for (int a = 0; a < n; a++)
           {
            
           }
           
           }
           
           }
           
        }
        cout << endl;
    }

    // Loop to print the lower half of the pattern
    for (int i = n - 1; i >= 1; i--) {
        int num = i;
        for (int j = 1; j <= i; j++) {
            cout << num << " ";
            num++;
        }
        cout << endl;
    }

    return 0;
}

