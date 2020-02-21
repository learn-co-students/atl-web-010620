author1 = Author.create(name: 'Dino', bio: 'Here for good time! Not for long time.')
author2 = Author.create(name: 'Mitch', bio: 'Never met a mongolian.. psych!!')

book1 = Book.create(title: 'The mongolian hoax...', author_id: author2.id)
book2 = Book.create(title: 'LOL', author_id: author1.id)
book3 = Book.create(title: 'My life as 🦖', author_id: author1.id)
