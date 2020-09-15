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
    "frontMatterFormat": "yaml",
	"systems": [
		"adamrms-dashboard", "adamrms-app", "adamrms-notifications", "adamrms-website", "adamrms-api", "beepos-login", "beepos-endofday"
	]
  },
  "theme": {
		"links": {
			en: {
				"contact": "https://studios.jbithell.com/",
				"home": "https://studios.jbithell.com/"
			}
		},
  },
  "analytics": {
	  "ga":"UA-26373319-8",
  },
  "baseUrl": "https://status.jbithell.com",
}