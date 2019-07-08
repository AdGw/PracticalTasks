#include <stdio.h>
#include <stdlib.h>

#include <sys/types.h>
#include <winsock2.h>
#include <windows.h>
int newtwork_socket;
int main()
{
  //create the socket
  newtwork_socket = socket(AF_INET, SOCK_STREAM, 0);
  // specify an address for the socket
  struct sockaddr_in server_address;
  server_address.sin_family = AF_INET;
  server_address.sin_port = htons(8080);
  server_address.sin_addr.s_addr = INADDR_ANY;

  int connection_status = connect(newtwork_socket, (struct sockaddr *)&server_address, sizeof(server_address));
  // checking for err with connection
  if (connection_status == -1)
  {
    printf("Connection Error");
  }
  else
  {
    printf("ok");
  }
  //recieve data from the server
  char server_response[256];
  recv(newtwork_socket, &server_response, sizeof(server_response), 0);
  // print out the server response
  printf("The server sent the data: %s\n", server_response);
  // close the socket
  close(newtwork_socket);
  return 0;
}