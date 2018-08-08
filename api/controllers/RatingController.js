module.exports = {
	getRating: async function(req, res){
		var testId = req.body.testId;
		var numberRow = req.body.numberRow;
		var numberPage = req.body.numberPage;		
		var skip = (numberPage- 1)*numberRow;
		var userRatingSql = `
		SELECT user_book_rating.userId,user_book_rating.startTime,user_book_rating.mark,user_book_rating.duringTime,user_book_rating.testId,user_book_rating.name,user_book_rating.name_sn
		FROM user_book_rating
		WHERE user_book_rating.testId = $1
		GROUP BY user_book_rating.userId
		ORDER BY user_book_rating.mark desc,user_book_rating.duringTime desc
		LIMIT $2
		OFFSET $3 `;
		// Send it to the database.
		var dataRatings = await sails.sendNativeQuery(userRatingSql, [testId, numberRow, skip]);
		if(dataRatings){
			res.json(dataRatings.rows);
		}else res.json(0);		
	}
};