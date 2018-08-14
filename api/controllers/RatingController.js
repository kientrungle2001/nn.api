module.exports = {
	getRating: async function(req, res){
		var testId = parseInt(req.body.testId);
		var numberRow = parseInt(req.body.numberRow);
		var numberPage = parseInt(req.body.numberPage);		
		var skip = numberPage * numberRow;
		var userRatingSql = `
		SELECT user_book_rating.userId,user_book_rating.startTime,user_book_rating.mark,user_book_rating.duringTime,user_book_rating.testId,user_book_rating.name,user_book_rating.name_sn,
		user.name as fullName, user.username
		FROM user_book_rating
		JOIN user on user_book_rating.userId = user.id
		WHERE user_book_rating.testId = $1
		ORDER BY user_book_rating.mark desc,user_book_rating.duringTime asc
		LIMIT $2
		OFFSET $3 `;
		// Send it to the database.
		var dataRatings = await sails.sendNativeQuery(userRatingSql, [testId, numberRow, skip]);

		var countRatingSql = `
		SELECT count(*) as countRating
		FROM user_book_rating
		JOIN user on user_book_rating.userId = user.id
		WHERE user_book_rating.testId = $1`;
		// Send it to the database.
		var countRatings = await sails.sendNativeQuery(countRatingSql, [testId]);
		if(dataRatings){
			res.json({
				rows: dataRatings.rows,
				total: countRatings.rows[0].countRating
			});
		}else res.json({
			rows: [],
			total: 0
		});		
	}
};