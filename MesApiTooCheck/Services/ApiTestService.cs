using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using MesApiTooCheck.Models;

namespace MesApiTooCheck.Services
{
    public class ApiTestService
    {
        private readonly IHttpClientFactory _clientFactory;

        public ApiTestService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<HttpResponseMessage> TestApiAsync(ApiItem apiItem, TestData? testData)
        {
            var request = new HttpRequestMessage(new HttpMethod(apiItem.HttpMethod), apiItem.Url);

            if (testData != null && testData.Content != null)
            {
                if (!string.IsNullOrEmpty(testData.ContentType))
                {
                    request.Content = new StringContent(testData.Content, Encoding.UTF8, testData.ContentType);
                }
                else
                {
                    request.Content = new StringContent(testData.Content, Encoding.UTF8);
                }
            }

            var client = _clientFactory.CreateClient();
            var response = await client.SendAsync(request);

            return response;
        }
    }
}