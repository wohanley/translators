{
	"translatorID": "3c4150bc-9f55-4af2-9c21-6878ecb7446a",
	"label": "Real Life Magazine",
	"creator": "William O'Hanley",
	"target": "https?://(www\\.)?reallifemag\\.com/",
	"minVersion": "5.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2023-04-27 19:02:32"
}

function detectWeb(_doc, _url) {
	return "magazineArticle";
}

function doWeb(doc, url) {
	const item = new Zotero.Item("magazineArticle");

	// seems to get added automatically somewhere
	item.libraryCatalog = "";

	item.url = url;
	item.publicationTitle = "Real Life";
	item.language = "en";
	item.title = doc.querySelector("title").textContent.trim().replace(" — Real Life", "");
	item.creators = [ZU.cleanAuthor(doc.querySelector(".article-head .author").textContent.trim(), "author")];
	item.date = doc.querySelector(".article-head .date").textContent.trim();
	item.abstractNote = doc.querySelector(".article-head .dek").textContent.trim();

	item.complete();
}/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://reallifemag.com/same-old/",
		"items": [
			{
				"itemType": "magazineArticle",
				"title": "Same Old",
				"creators": [
					{
						"firstName": "Sun-Ha",
						"lastName": "Hong",
						"creatorType": "author"
					}
				],
				"date": "November 29, 2021",
				"language": "en",
				"publicationTitle": "Real Life",
				"url": "https://reallifemag.com/same-old/",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
