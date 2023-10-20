library(tidyverse)
library(Rcrawler)


#Main crawler idea
# Rcrawler(Website="https://www.metacritic.com/browse/game/",
#          crawlUrlfilter = "/game/",
#          no_cores = 4,
#          no_conn = 4,
#          MaxDepth = 1,
#          saveOnDisk = FALSE)

#ContentScraper(Url = "https://www.metacritic.com/game/batman-arkham-city/",
#               XpathPatterns = c("//div[@class='c-productHero_title g-inner-spacing-bottom-medium g-outer-spacing-top-medium']/div",
#                                 "//div[@class='c-productScoreInfo_scoreNumber u-float-right']/div/div/span",
#                                 "//div[@class='c-siteReviewScore_background c-siteReviewScore_background-user']/div/span"))

# Basically a filter
# ContentScraper(Url = "https://www.metacritic.com/game/batman-arkham-city/",
#                XpathPatterns = c("//div[@class='c-productHero_title g-inner-spacing-bottom-medium g-outer-spacing-top-medium']/div",
#                                  "//div[starts-with(@title, 'Metascore')]/span",
#                                  "//div[starts-with(@title, 'User score')]/span"))

CustomLabels <- c("title",
                  "h1",
                  "canonical tag",
                  "meta robots",
                  "hreflang",
                  "body class")
CustomXPaths <- c("///title",
                  "///h1",
                  "//link[@rel='canonical']/@href",
                  "//meta[@rel='robots']/@content",
                  "//link[@rel='alternate']/@hreflang",
                  "//body/@class")

# Crawler with filter and other specs
Rcrawler(Website="https://www.wikipedia.org/",
         ExtractXpathPat = CustomXPaths, 
         PatternsNames = CustomLabels,
         no_cores = 4,
         no_conn = 4,
         MaxDepth = 2,
         # RequestsDelay = 0.1,
         saveOnDisk = TRUE,
         NetworkData = TRUE)

NEWDATA <- data.frame(matrix(unlist(DATA), nrow=length(DATA), byrow=T))
MERGED <- cbind(INDEX, NEWDATA)
MERGED$pagetype <- str_split_fixed(MERGED$X7, " ", 2)[,1]
MERGED$pagetype_short <- str_replace(MERGED$pagetype, "-default", "")

write.csv(MERGED, "./scraped_data.csv")


library(dplyr)

links <- NetwEdges[,1:2] %>%
  #grabing the first two columns
  distinct() 

# loading igraph package
install.packages("igraph")
library(igraph)

# Loading website internal links inside a graph object
g <- graph.data.frame(links)

# this is the main function, don't ask how it works
pr <- page.rank(g, algo = "prpack", vids = V(g), directed = TRUE, damping = 0.85)

# grabing result inside a dedicated data frame
values <- data.frame(pr$vector)
values$names <- rownames(values)

# deleting row names
row.names(values) <- NULL

# reordering column
values <- values[c(2,1)]
# renaming columns
names(values)[1] <- "url"
names(values)[2] <- "pr"
View(values)

#replacing id with url
values$url <- NetwIndex
# out of 10
values$pr <- round(values$pr / max(values$pr) * 10)
#display
View(values)

write.csv(MERGED, "./page-rank.csv")
