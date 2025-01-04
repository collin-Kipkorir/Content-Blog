const articles = [
    {
      title: "How to Build a Responsive Website",
      category: "Web Development",
      content: "Learn the best practices for creating responsive websites using HTML, CSS, and JavaScript.",

      video: "assets/videos/responsive-web.mp4" // Add a video path
    },
    {
      title: "Top 10 Time Management Tips",
      category: "Personal Development",
      content: "Discover proven strategies to manage your time effectively and boost productivity.",
      image: "assets/images/placeholder.png"
    },
    {
      title: "Creating Stunning Visuals with Tailwind CSS",
      category: "Web Design",
      content: "Use Tailwind CSS to craft beautiful, modern user interfaces quickly and efficiently.",

      video: "https://www.youtube.com/watch?v=Qq2vHuE9UPU" // Another video path
    },
    {
        title: "How to Build a Responsive Website",
        category: "Web Development",
        content: "Learn the best practices for creating responsive websites using HTML, CSS, and JavaScript.",
  
        video: "assets/videos/responsive-web.mp4" // Add a video path
      },
      {
        title: "Top 10 Time Management Tips",
        category: "Personal Development",
        content: "Discover proven strategies to manage your time effectively and boost productivity.",
        image: "assets/images/placeholder.png"
      },
      {
        title: "Creating Stunning Visuals with Tailwind CSS",
        category: "Web Design",
        content: "Use Tailwind CSS to craft beautiful, modern user interfaces quickly and efficiently.",
  
        video: "https://www.youtube.com/watch?v=Qq2vHuE9UPU" // Another video path
      }
  ];
  
  // Render articles with separate cards for images and videos
  function displayArticles(articleList = articles) {
    const articleContainer = document.getElementById('article-list');
    articleContainer.innerHTML = articleList.map(article => `
      <div class="border rounded-lg shadow-lg overflow-hidden bg-white mb-4">
        ${article.image ? `
          <div class="image-card">
            <img src="${article.image}" alt="${article.title}" class="w-full h-64 mt-2 rounded-lg shadow-md">
            <div class="p-4">
              <h4 class="text-xl font-bold hover:text-blue-600 transition-colors">
                <a href="${article.image}" target="_blank" class="text-blue-600 hover:underline">${article.title}</a>
              </h4>
              <p class="text-sm text-gray-500">${article.category}</p>
              <p class="mt-2 text-gray-700">${article.content}</p>
            </div>
          </div>
        ` : ''}
        
        ${article.video ? `
          <div class="video-card">
           
            <video controls class="w-full h-64 mt-2 rounded-lg shadow-md">
              <source src="${article.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            
            <div class="p-4">
             <h5 class="text-lg font-semibold">
                <a href="${article.video}" target="_blank" class="text-blue-600 hover:underline">
                    Video: ${article.title}
                </a>
            </h5>
            <p class="text-sm text-gray-500">Description: ${article.description || 'No description available.'}</p>
              <p class="mt-2 text-gray-700">${article.content}</p>
            
            </div>
          </div>
        ` : ''}
      </div>
    `).join('');
  }
  
  // Search handler with video support
  function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    const filtered = articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayArticles(filtered);
  }
  
  // Load articles on page load
  document.addEventListener('DOMContentLoaded', () => displayArticles());
  