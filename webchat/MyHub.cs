using Microsoft.AspNetCore.SignalR;

namespace webchat{

class MyHub : Hub
{
    public async Task SendMenssage(string menssage){
        await Clients.All.SendAsync("ReciveMenssage", menssage);
    }
}
}