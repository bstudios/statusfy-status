module.exports = {
  "title": "Bithell Studios",
  "name": "bithell_studios",
  "description": "Bithell Studios Status Page",
  "defaultLocale": "en",
  "locales": [
    {
      "code": "en",
      "iso": "en-GB",
      "name": "English",
      "file": "en.json"
    }
  ],
  "content": {
	  "dir":"content",
    "frontMatterFormat": "json",
	"systems": [
		"adamrms-api", "adamrms-site", "adamrms-notifications", "adamrms-app", "beepos-login", "beepos-endofday"
	]
  },
  "theme": {
		"links": {
			"contact": "https://studios.jbithell.com/",
			"home": "https://studios.jbithell.com/"
		},
  },
  "baseUrl": "https://status.jbithell.com",
}