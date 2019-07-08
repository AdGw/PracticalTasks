#include <stdio.h>
#include <stdlib.h>

#include <sys/types.h>
#include <winsock2.h>
#include <windows.h>

char server_message[256] = "You have reached the server";
int server_socket;
int main()
{
  // create the server socket
  server_socket = socket(AF_INET, SOCK_STREAM, 0);
  //define the server address
  struct sockaddr_in server_address;
  server_address.sin_family = AF_INET;
  server_address.sin_port = htons(8080);
  server_address.sin_addr.s_addr = INADDR_ANY;
  //bind the socket to the specified IP and port
  bind(server_socket, (struct sockaddr *)&server_address, sizeof(server_address));

  return 0;
}