#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>  // for open
#include <unistd.h> // for close
#include <sys/types.h>
#include <winsock2.h>
#include <windows.h>

int main()
{
  char server_message[256] = "You have reached the server";
  int server_socket;
  // create the server socket
  server_socket = socket(AF_INET, SOCK_STREAM, 0);
  //define the server address
  struct sockaddr_in server_address;
  server_address.sin_family = AF_INET;
  server_address.sin_port = htons(8080);
  server_address.sin_addr.s_addr = INADDR_ANY;
  //bind the socket to the specified IP and port
  bind(server_socket, (struct sockaddr *)&server_address, sizeof(server_address));
  listen(server_socket, 5);
  int client_socket;
  client_socket = accept(server_socket, NULL, NULL);
  // send message
  send(client_socket, server_message, sizeof(server_message), 0);
  // close socket
  close(server_socket);
  return 0;
}